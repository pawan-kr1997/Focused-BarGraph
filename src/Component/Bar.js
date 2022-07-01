import { useEffect, useRef } from 'react';
import sound from '../Assets/focus.mp3';
import './Bar.css';


const Bar = (props) => {

    const refs = useRef([]);
    let barArray = [];
    let barData = props.data;
    const focusSound = new Audio(sound);

    let barHeightScale;


    const handleClick = (index) => {
        refs.current[index]?.scrollIntoView({ behavior: 'smooth', inline: "center" });
    };

    const determineBarHeightScale = (barData) => {
        let maxData = barData[0][props.yAxis];

        for (let i = 1; i < barData.length; i++) {
            if (parseInt(barData[i][props.yAxis]) > parseInt(maxData)) {
                maxData = barData[i][props.yAxis];
            }
        }

        return Math.ceil(parseInt(maxData) / parseInt(props.barHeight));
    }


    useEffect(() => {

        let barGroup = document.getElementsByClassName("BarBody");
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


            if ((approxBarIndex + 15) >= barGroup.length)
                rightBarIndex = barGroup.length;
            else
                rightBarIndex = approxBarIndex + 15;




            for (let i = leftBarIndex; i < rightBarIndex; i++) {

                if (Math.ceil(barGroup[i].getBoundingClientRect().left) > midWindow - 25 && Math.ceil(barGroup[i].getBoundingClientRect().left) < midWindow + 25) {
                    refs.current[i].style.background = props.barFocusColor;
                    if (props.soundEnable) {
                        focusSound.play();
                    }

                    XAxisData.textContent = barGroup[i].attributes["data-test-id"].nodeValue.split('_')[0];
                    YAxisData.textContent = barGroup[i].attributes["data-test-id"].nodeValue.split('_')[1];
                }
                else {
                    refs.current[i].style.background = props.barColor;
                }
            }
        })
    }, [])

    barHeightScale = determineBarHeightScale(barData);

    for (let index = 0; index < barData.length; index++) {

        let barHeight = Math.floor((100 / parseInt(props.barHeight)) * (parseInt(barData[index][props.yAxis]) / barHeightScale));
        let barHeightPercent = barHeight + "%";

        let dataTestId = barData[index][props.xAxis] + "_" + barData[index][props.yAxis];

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


export default Bar;
