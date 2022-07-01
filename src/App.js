import Bar from './Component/Bar';

import './App.css';

const App = () => {

  let data = [
    { Date: "1/12/22", "Steps Counts": "68" },
    { Date: "2/12/22", "Steps Counts": "50" },
    { Date: "3/12/22", "Steps Counts": "200" },
    { Date: "4/12/22", "Steps Counts": "68" },
    { Date: "5/12/22", "Steps Counts": "68" },
    { Date: "6/12/22", "Steps Counts": "68" },
    { Date: "7/12/22", "Steps Counts": "68" },
    { Date: "8/12/22", "Steps Counts": "168" },
    { Date: "9/12/22", "Steps Counts": "68" },
    { Date: "10/12/22", "Steps Counts": "68" },
    { Date: "11/12/22", "Steps Counts": "68" },
    { Date: "12/12/22", "Steps Counts": "68" },
    { Date: "13/12/22", "Steps Counts": "168" },
    { Date: "14/12/22", "Steps Counts": "68" },
    { Date: "15/12/22", "Steps Counts": "68" },
    { Date: "16/12/22", "Steps Counts": "168" },
    { Date: "17/12/22", "Steps Counts": "68" },
    { Date: "18/12/22", "Steps Counts": "68" },
    { Date: "19/12/22", "Steps Counts": "68" },
    { Date: "20/12/22", "Steps Counts": "68" },
    { Date: "21/12/22", "Steps Counts": "68" },
    { Date: "22/12/22", "Steps Counts": "168" },
    { Date: "23/12/22", "Steps Counts": "68" },
    { Date: "24/12/22", "Steps Counts": "68" },
    { Date: "25/12/22", "Steps Counts": "68" },
    { Date: "26/12/22", "Steps Counts": "168" },
    { Date: "27/12/22", "Steps Counts": "68" },
    { Date: "28/12/22", "Steps Counts": "68" },
    { Date: "29/12/22", "Steps Counts": "68" },
    { Date: "30/12/22", "Steps Counts": "68" },
    { Date: "31/12/22", "Steps Counts": "68" },
    { Date: "1/12/22", "Steps Counts": "28" },
    { Date: "2/12/22", "Steps Counts": "68" },
    { Date: "3/12/22", "Steps Counts": "68" },
    { Date: "4/12/22", "Steps Counts": "68" },
    { Date: "5/12/22", "Steps Counts": "168" },
    { Date: "6/12/22", "Steps Counts": "68" },
    { Date: "7/12/22", "Steps Counts": "68" },
    { Date: "8/12/22", "Steps Counts": "68" },
    { Date: "9/12/22", "Steps Counts": "68" },
    { Date: "10/12/22", "Steps Counts": "68" },
    { Date: "11/12/22", "Steps Counts": "168" },
    { Date: "12/12/22", "Steps Counts": "68" },
    { Date: "13/12/22", "Steps Counts": "68" },
    { Date: "14/12/22", "Steps Counts": "68" },
    { Date: "15/12/22", "Steps Counts": "99" },
    { Date: "16/12/22", "Steps Counts": "68" },
    { Date: "17/12/22", "Steps Counts": "68" },
    { Date: "18/12/22", "Steps Counts": "39" },
    { Date: "19/12/22", "Steps Counts": "68" },
    { Date: "20/12/22", "Steps Counts": "68" },
    { Date: "21/12/22", "Steps Counts": "138" },
    { Date: "22/12/22", "Steps Counts": "68" },
    { Date: "23/12/22", "Steps Counts": "68" },
    { Date: "24/12/22", "Steps Counts": "138" },
    { Date: "25/12/22", "Steps Counts": "68" },
    { Date: "26/12/22", "Steps Counts": "68" },
    { Date: "27/12/22", "Steps Counts": "168" },
    { Date: "28/12/22", "Steps Counts": "68" },
    { Date: "29/12/22", "Steps Counts": "68" },
    { Date: "30/12/22", "Steps Counts": "68" },
    { Date: "31/12/22", "Steps Counts": "68" },
    { Date: "1/12/22", "Steps Counts": "98" },
    { Date: "2/12/22", "Steps Counts": "68" },
    { Date: "3/12/22", "Steps Counts": "68" },
    { Date: "4/12/22", "Steps Counts": "98" },
    { Date: "5/12/22", "Steps Counts": "68" },
    { Date: "6/12/22", "Steps Counts": "98" },
    { Date: "7/12/22", "Steps Counts": "68" },
    { Date: "8/12/22", "Steps Counts": "68" },
    { Date: "9/12/22", "Steps Counts": "68" },
    { Date: "10/12/22", "Steps Counts": "68" },
    { Date: "11/12/22", "Steps Counts": "68" },
    { Date: "12/12/22", "Steps Counts": "10" },
    { Date: "12/12/22", "Steps Counts": "68" },
    { Date: "14/12/22", "Steps Counts": "168" },
    { Date: "15/12/22", "Steps Counts": "68" },
    { Date: "16/12/22", "Steps Counts": "168" },
    { Date: "17/12/22", "Steps Counts": "68" },
    { Date: "18/12/22", "Steps Counts": "68" },
    { Date: "19/12/22", "Steps Counts": "168" },
    { Date: "20/12/22", "Steps Counts": "68" },
    { Date: "21/12/22", "Steps Counts": "68" },
    { Date: "22/12/22", "Steps Counts": "58" },
    { Date: "23/12/22", "Steps Counts": "68" },
    { Date: "24/12/22", "Steps Counts": "68" },
    { Date: "25/12/22", "Steps Counts": "48" },
    { Date: "26/12/22", "Steps Counts": "68" },
    { Date: "27/12/22", "Steps Counts": "68" },
    { Date: "28/12/22", "Steps Counts": "168" }

  ]

 



  return (
    <div className="App">
      <h1>Implementing a bar graph</h1>
      <Bar barParentWidth="80%"
        barParentHeight="180px"
        barHeight= "150px"
        xAxis="Date"
        yAxis="Steps Counts"
        barColor="linear-gradient(to right,#DB0B5F, #6F00ED)"
        barFocusColor="orange"
        data={data}
        soundEnable={true} />

    </div>
  );
}

export default App;
