"use strict"

const home = (req, res) => {
    res.render("home/index");
};

const login = (req,res) => {
    res.render("home/login");
}

module.exports = {home,login}; //외부에서 불러서 사용할수있게해주는 메서드
