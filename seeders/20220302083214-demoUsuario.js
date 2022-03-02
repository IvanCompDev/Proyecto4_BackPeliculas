'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('usuarios', [
      {"first_name":"Ermentrude","last_name":"Leavold","age":67,"email":"eleavold0@sogou.com"},
      {"first_name":"Bing","last_name":"Faro","age":38,"email":"bfaro1@behance.net"},
      {"first_name":"Henriette","last_name":"Knagges","age":67,"email":"hknagges2@weather.com"},
      {"first_name":"Alic","last_name":"Canham","age":64,"email":"acanham3@pinterest.com"},
      {"first_name":"Ronda","last_name":"Anthes","age":34,"email":"ranthes4@paginegialle.it"},
      {"first_name":"Padraic","last_name":"Salkeld","age":5,"email":"psalkeld5@seattletimes.com"},
      {"first_name":"Myron","last_name":"Jans","age":14,"email":"mjans6@biblegateway.com"},
      {"first_name":"Muhammad","last_name":"Harme","age":24,"email":"mharme7@stumbleupon.com"},
      {"first_name":"Madalyn","last_name":"Yegorov","age":27,"email":"myegorov8@stanford.edu"},
      {"first_name":"Jermayne","last_name":"Laytham","age":18,"email":"jlaytham9@engadget.com"},
      {"first_name":"Boony","last_name":"McCuish","age":27,"email":"bmccuisha@google.com.au"},
      {"first_name":"Nicola","last_name":"Gladtbach","age":70,"email":"ngladtbachb@cmu.edu"},
      {"first_name":"Darcy","last_name":"Riba","age":52,"email":"dribac@indiatimes.com"},
      {"first_name":"Isidor","last_name":"Coit","age":38,"email":"icoitd@infoseek.co.jp"},
      {"first_name":"Lucian","last_name":"O'Mohun","age":39,"email":"lomohune@ebay.co.uk"},
      {"first_name":"Neala","last_name":"Woodhead","age":64,"email":"nwoodheadf@taobao.com"},
      {"first_name":"Josepha","last_name":"Doey","age":9,"email":"jdoeyg@bravesites.com"},
      {"first_name":"Cristin","last_name":"Tesimon","age":38,"email":"ctesimonh@dot.gov"},
      {"first_name":"Clemmy","last_name":"Colleck","age":65,"email":"ccollecki@huffingtonpost.com"},
      {"first_name":"Sheryl","last_name":"Coffee","age":41,"email":"scoffeej@photobucket.com"},
      {"first_name":"Caitlin","last_name":"Killby","age":30,"email":"ckillbyk@google.com.br"},
      {"first_name":"Chariot","last_name":"Zappel","age":29,"email":"czappell@netvibes.com"},
      {"first_name":"Brett","last_name":"Rossi","age":55,"email":"brossim@nature.com"},
      {"first_name":"Piper","last_name":"Wanklyn","age":17,"email":"pwanklynn@craigslist.org"},
      {"first_name":"Carver","last_name":"Lakey","age":40,"email":"clakeyo@themeforest.net"},
      {"first_name":"Rice","last_name":"Patridge","age":15,"email":"rpatridgep@sciencedaily.com"},
      {"first_name":"Donall","last_name":"Woolam","age":23,"email":"dwoolamq@columbia.edu"},
      {"first_name":"Earle","last_name":"Wooderson","age":12,"email":"ewoodersonr@lulu.com"},
      {"first_name":"Theodor","last_name":"Lutwidge","age":59,"email":"tlutwidges@cdc.gov"},
      {"first_name":"Gunner","last_name":"Cleaves","age":21,"email":"gcleavest@storify.com"},
      {"first_name":"Gratiana","last_name":"Slate","age":44,"email":"gslateu@squarespace.com"},
      {"first_name":"Stirling","last_name":"Leavold","age":48,"email":"sleavoldv@angelfire.com"},
      {"first_name":"Zane","last_name":"Robbins","age":16,"email":"zrobbinsw@elegantthemes.com"},
      {"first_name":"Kasey","last_name":"Newarte","age":62,"email":"knewartex@alibaba.com"},
      {"first_name":"Debi","last_name":"Bastian","age":52,"email":"dbastiany@virginia.edu"},
      {"first_name":"Sayers","last_name":"Kinnen","age":11,"email":"skinnenz@scribd.com"},
      {"first_name":"Gerome","last_name":"Chyuerton","age":53,"email":"gchyuerton10@opera.com"},
      {"first_name":"Miguel","last_name":"Brunesco","age":60,"email":"mbrunesco11@1688.com"},
      {"first_name":"Dominick","last_name":"Drover","age":1,"email":"ddrover12@ibm.com"},
      {"first_name":"Dennie","last_name":"Meineking","age":6,"email":"dmeineking13@redcross.org"},
      {"first_name":"Bevan","last_name":"Eccleston","age":69,"email":"beccleston14@shop-pro.jp"},
      {"first_name":"Darrell","last_name":"Keinrat","age":41,"email":"dkeinrat15@cisco.com"},
      {"first_name":"Appolonia","last_name":"Denekamp","age":26,"email":"adenekamp16@wix.com"},
      {"first_name":"Bellanca","last_name":"Blindmann","age":53,"email":"bblindmann17@furl.net"},
      {"first_name":"Shaine","last_name":"Shand","age":33,"email":"sshand18@princeton.edu"},
      {"first_name":"Abbe","last_name":"Hallsworth","age":36,"email":"ahallsworth19@patch.com"},
      {"first_name":"Fernando","last_name":"Karlowicz","age":19,"email":"fkarlowicz1a@topsy.com"},
      {"first_name":"Matty","last_name":"Caunce","age":13,"email":"mcaunce1b@merriam-webster.com"},
      {"first_name":"Jervis","last_name":"Halsworth","age":63,"email":"jhalsworth1c@yahoo.com"},
      {"first_name":"Claudette","last_name":"Codlin","age":69,"email":"ccodlin1d@addtoany.com"}


    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
