export class InMemoryDataService {
  createDb() {
    let heroes = [
      { id: 11, name: 'Cruyff', pic: "img/1.jpg"  },
      { id: 12, name: 'Zidane' ,   pic: "img/2.jpg" },
      { id: 13, name: 'Carlos' ,  pic: "img/3.jpg" },
      { id: 14, name: 'Baresi' , pic: "img/4.jpg" },
      { id: 15, name: 'Paltini' ,   pic: "img/5.jpg" },
      { id: 16, name: 'Puskas' , pic: "img/6.jpg" },
      { id: 17, name: 'Ronaldino' ,  pic: "img/7.jpg" },
      { id: 18, name: 'Charlton' ,   pic: "img/8.jpg" },
      { id: 19, name: 'Maldini' ,   pic: "img/9.jpg" },
      { id: 20, name: 'Maradona' , pic: "img/10.jpg" }
    ];
    return { heroes };
  }
}

//added image locations//