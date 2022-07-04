import { useEffect, useRef } from 'react';
import sound from '../Assets/focus.mp3';
import PropTypes from 'prop-types';
import './Bar.css';


const Bar = (props) => {

    const refs = useRef([]);
    let barArray = [];
    let barData = props.data;
    const focusSound = new Audio(sound);

    let barHeightScale;

    //Function to make the bar active on clicking -------------

    const handleClick = (index) => {
        refs.current[index]?.scrollIntoView({ behavior: 'smooth', inline: "center" });
    };

    //Function to determine scaling factor  --------------

    const determineBarHeightScale = (barData) => {
        let maxData = barData[0][props.yAxis];

        for (let i = 1; i < barData.length; i++) {
            if (barData[i][props.yAxis] > maxData) {
                maxData = barData[i][props.yAxis];
            }
        }

        return Math.ceil(maxData / parseInt(props.barHeight));
    }

    //Logic for DOM manipulation ----------------

    useEffect(() => {

        let barParent = document.querySelector('div.Parent');
        const XAxisData = document.getElementById("XAxisData");
        const YAxisData = document.getElementById("YAxisData");

        refs.current[props.data.length - 1].scrollIntoView({ behavior: 'smooth', inline: "center" });

        barParent.addEventListener("scroll", function () {

            let midWindow = Math.ceil(window.innerWidth / 2);
            let scrollPosition = Math.ceil(barParent.scrollLeft);
            let approxBarIndex = Math.ceil(scrollPosition / 50);

            let leftBarIndex;
            let rightBarIndex;

            if ((approxBarIndex - 15) <= 0)
                leftBarIndex = 0;
            else
                leftBarIndex = approxBarIndex - 15;

            if ((approxBarIndex + 15) >= refs.current.length)
                rightBarIndex = refs.current.length;
            else
                rightBarIndex = approxBarIndex + 15;


            for (let i = leftBarIndex; i < rightBarIndex; i++) {

                if (Math.ceil(refs.current[i].getBoundingClientRect().left) > midWindow - 25 && Math.ceil(refs.current[i].getBoundingClientRect().left) < midWindow + 25) {
                    refs.current[i].style.background = props.barFocusColor;
                    if (props.soundEnable) {
                        focusSound.play();
                    }

                    XAxisData.textContent = refs.current[i].attributes["data-test-id"].nodeValue.split('_')[0];
                    YAxisData.textContent = refs.current[i].attributes["data-test-id"].nodeValue.split('_')[1];

                }
                else {
                    refs.current[i].style.background = props.barColor;
                }
            }
        })
    }, [])

    barHeightScale = determineBarHeightScale(barData);

    //Logic to populate the bars ---------------  

    try {
        for (let index = 0; index < barData.length; index++) {

            let barHeight = Math.ceil((100 / parseInt(props.barHeight)) * (barData[index][props.yAxis] / barHeightScale));
            let barHeightPercent = barHeight + "%";

            if (!barData[index][props.xAxis] || !barData[index][props.yAxis]) {
                throw new Error("Either the data entered was undefined or xAxis and yAxis did not matched with the data");
            }

            let dataTestId = barData[index][props.xAxis] + "_" + barData[index][props.yAxis].toString();

            if (index === 0) {
                barArray.push(<div key={index}
                    ref={(element) => { refs.current[index] = element }}
                    className='BarBody'
                    style={{
                        marginLeft: "50%",
                        height: barHeightPercent
                    }}
                    data-test-id={dataTestId}
                    onClick={() => handleClick(index)}></div>)
            }
            else if (index === barData.length - 1) {
                barArray.push(<div key={index}
                    className='BarBody'
                    ref={(element) => { refs.current[index] = element }}
                    style={{
                        marginRight: "50%",
                        height: barHeightPercent
                    }}
                    data-test-id={dataTestId}
                    onClick={() => handleClick(index)}></div>)
            }
            else {
                barArray.push(<div key={index}
                    ref={(element) => { refs.current[index] = element }}
                    className='BarBody'
                    style={{ height: barHeightPercent }}
                    data-test-id={dataTestId}
                    onClick={() => handleClick(index)}></div>);
            }

        }
    }
    catch (err) {
        console.log("Error occured: " + err.message);
    }


    return (
        <div className='GrandParent'>
            <div className='Parent' style={{ width: props.barParentWidth, height: props.barParentHeight }}>
                {barArray}
            </div>

            <div className='DataAreaParent'>

                <div className='DataParent'>
                    <span id="XAxisData" className='SpanText'></span>
                    <b className='BoldText'>{props.xAxis} </b>
                </div>

                <div className='DataParent'>
                    <span id="YAxisData" className='SpanText'></span>
                    <b className='BoldText'>{props.yAxis}</b>
                </div>

            </div>

        </div>

    )

}

Bar.propTypes = {
    barParentWidth: PropTypes.string.isRequired,
    barParentHeight: PropTypes.string.isRequired,
    barHeight: PropTypes.string.isRequired,
    xAxis: PropTypes.string.isRequired,
    yAxis: PropTypes.string.isRequired,
    barColor: PropTypes.string.isRequired,
    barFocusColor: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired,
    soundEnable: PropTypes.bool.isRequired
}



export default Bar;
