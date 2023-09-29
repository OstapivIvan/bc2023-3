const fs = require("node:fs");


fs.readFile("data.json", (err, data) => {
    if (err) {
        console.log("Помилка зчитування файлу", err);
        return;
    }

  let result = ''; 

    try {
        const jsonData = JSON.parse(data);

        const selectedData = jsonData.filter(item => item.txt === 'Доходи, усього' || item.txt === 'Витрати, усього');

        for (const item of selectedData) {
            result += `${item.txt}: ${item.value}\n`;
        }
    } catch (error) {
        console.log('Помилка під час обробки даних:', error);
        return;  
    }

    fs.writeFile('output.txt', result, (err) => {
        if (err) {
            console.log('Помилка в записуванні файлу:', err);
        } else {
            console.log('Дані збережено в output.txt');
        }
    });
});