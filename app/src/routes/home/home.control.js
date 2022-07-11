"use strict"

const output = {
    home : (req, res) => {
        res.render("home/index");
    },
    
    login : (req,res) => {
        res.render("home/login");
    },
};

const process = {
    login : (req,res) =>{
        console.log(req.body);
    }
};

module.exports = {
    output,process
}; //외부에서 불러서 사용할수있게해주는 메서드
