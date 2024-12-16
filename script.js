function runTask1() {
    const min = 10;
    const max = 100;
    const n = 10;
    const arr = [];

    for (let i = 0; i < n; i++) {
        const randomNum = Math.floor(Math.random() * (max - min + 1)) +min;

        arr.push(randomNum)
        
    };
    document.getElementById("output").innerHTML = `
        <h2>Խնդիր 1</h2>
        <p>Պատահական թվերով լցված զանգված։ </p>
        ${arr.join(", ")}
    `;
}

function runTask2() {
    const arr = [123, 456, 789];
    const combined = arr.join(" ").split("");


    document.getElementById("output").innerHTML = `
    <h2>Խնդիր 2</h2>
    <p>Սկզբնական զանգված։ 
    ${arr.join(", ")}</p>
    <p> Միավորված տարրերը նիշ առ նիշ։ 
    ${combined.join(", ")}
    </p>
    `;
    
}