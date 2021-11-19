var toyRobot = {
    productId: "123-12",
    name: "Robot",
    price: "25,000",
    madeIn: "Korea",
    Qantity: 10,
    showStock: function() {
        document.querySelector('#display').innerHTML = this.name + " 제품은 " + this.Qantity + "개 남아있습니다.";
    }
};

toyRobot.showStock();