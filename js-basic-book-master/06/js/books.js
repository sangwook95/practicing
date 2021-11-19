function Book(title, author, volume, price) {
    this.title = title;
    this.author = author;
    this.volume = volume;
    this.price = price;
}

var html = new Book('웹 표준의 정석', 'ko', '600', '18,000');
var youtube = new Book('유튜브 크리에이터', 'us', '700', '20,000');
var python = new Book('프로그래밍', 'uk', '800', '19,000');

var bookList = [html, youtube, python];

document.write('<h1>책의 가격 살펴보기</h1>');
for(var i=0; i<bookList.length; i++) {
    document.write('<p>' + bookList[i].title + '</p>');
}