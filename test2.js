const request = require('request');




const cheerio = require('cheerio');




let name = "";

let image = "";

let job = "";

let combined = "";

let nameResult = [];

let imageResult = [];

let jobResult = [];

let site = "https://www.mindwareworks.com/";






console.log("--------------------------------------------------");




request('https://www.mindwareworks.com/company/team.do', (error, response, html) => {




   if(!error && response.statusCode == 200) {




    const $ = cheerio.load(html);




    $('div.thumb').each((i, link) => {




      name = $(link).find('span').text();




      nameResult.push({name});




    });




    $('div.thumb-wrap').each((i, link) => {




        image = site + ($(link).find('img').attr('src'));




        imageResult.push({image});




    });




    $('.company-team-inner li strong').each((i, link) => {




        job = ($(link).text());




        jobResult.push({job});




    });




  }else{




console.log("오류");




  }




combined = nameResult.map((item, i) => Object.assign({}, item, imageResult[i], jobResult[i]));




console.log(combined);







 




});