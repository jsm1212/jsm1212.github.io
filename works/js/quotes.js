const quotes = [
    {
        quote : "피할수 없으면 즐겨라",
        author : "로버트 엘리엇"
    },
    {
        quote : "열정을 잃지 않고 실패에서 실패로 걸어가는 것이 성공이다.",
        author : "윈스턴 처칠"
    }
    ,
    {
        quote : "추구할 수 있는 용기가 있다면 우리의 모든 꿈은 이뤄질 수 있다.",
        author : "월트 디즈니"
    }
    ,
    {
        quote : "기회는 일어나는 것이 아니라 만들어내는 것이다. ",
        author : "크리스 그로서"
    }
    ,
    {
        quote : "나는 내가 더 노력할수록 운이 더 좋아진다는 걸 발견했다.",
        author : "토마스 제퍼슨"
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;