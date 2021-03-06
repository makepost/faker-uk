; (function () {
  'use strict';

  function sentences(count, separator) {
    if (!count) count = 2 + Math.floor(Math.random() * 4);
    if (!separator) separator = ' ';

    var result = '';

    for (var i = 0; i < count; i++) {
      if (i !== 0) result += separator;
      result += sentence();
    }

    return result;
  }

  var sentence = Phrase([
    function () { return 'Одна з ' + r('ведучих', 'найбільших', 'провідних') + ' ' + r('глобальних', 'міжнародних', 'світових') + ' ' + r('компаній', 'організацій') + ' ' + r('здійснює діяльність ' + r('за наступними напрямками', 'у наступних ' + r('галузях', 'сферах')) + ': ' + галузь() + ', ' + галузь() + ' та ' + галузь() + '', 'надає широкий спектр послуг, ' + r('а саме', 'зокрема') + ' ' + послугу() + ', ' + послугу() + ' та ' + послугу() + '') + '.'; },

    function () { return 'Завдяки ' + довершеним() + ' та ' + довершеним() + ' продуктам та послугам, ' + r('кваліфікованим', 'талановитим') + ' ' + r('працівникам', 'співробітникам') + ' і ' + r('відповідальному', 'серйозному') + ' ' + r('підходу', 'ставленню') + ' до ' + бізнесу() + ' та ' + бізнесу() + ', а також ' + r('кооперації', 'співпраці') + ' з ' + замовниками() + ' та ' + замовниками() + ', ' + товариство() + ' відкриває перед ' + r('світом', 'Україною') + ' нові ' + сучасні() + ' ' + r('можливості', 'перспективи', 'рішення') + '.'; },

    function () { return r('Мета ' + товариства(), 'Наша мета') + ' проста: це ' + r('забезпечення', 'надання') + ' вам ' + бізнесу() + ', ' + бізнесу() + ' та ' + бізнесу() + '.'; },

    function () { return r('Постійне', 'Систематичне', 'Тривале', 'Упевнене') + ' ' + r('вдосконалення', 'поліпшення') + ', ' + професіоналізм() + ', ' + професіоналізм() + ' та ' + професіоналізм() + ' забезпечили ' + товариству() + ' ' + r('визнання', 'успіх') + ' і провідну роль на ' + r('ринку України', 'світовому ринку') + '.'; },

    function () { return r('З ' + r(1998, 1999, 2000, 2001, 2002) + '-го року', 'На постійній основі', 'У своїй діяльності') + ' ' + товариство() + ' ' + r('використовує', 'застосовує') + ' ' + сучасні() + ' ' + сучасні() + ' ' + r('засоби', 'технології') + ' ' + бізнесу() + ', ' + бізнесу() + ' та ' + бізнесу() + '.'; },

    function () { return r('Незмінно', ' Стабільно') + ' ' + r('зміцнює позиції', 'надається', 'пропонується') + ' широкий вибір ' + бізнесу() + ': ' + галузь() + ', ' + галузь() + ' і ' + галузь() + ' для ' + киян() + ' і ' + киян() + '.'; },

    function () { return 'Ми впевнені, що впровадження ' + бізнесу() + ' (' + професіоналізм() + ') ' + r('життєво', 'критично') + ' ' + r('важливе', 'необхідне') + ' для розвитку, тому ми постійно ' + r('виконуємо зобов\'язання', 'працюємо над поліпшенням') + ' та разом з тим, відкриті до ' +  бізнесу() + '.' },

    function () { return 'Хочемо ' + r('вражати', 'дивувати', 'підкорювати') + ' ' + киян() + ' ' + r('зручністю', 'комфортом', 'якістю') + ' ' + бізнесу() + ' і прагнемо розвивати ' + послугу() + ', ' + послугу() + ' і ' + послугу() + ' разом із ' + замовниками() + '.' },
  ]);

  var бізнесу = Phrase([
    'безпрограшних домовленостей',
    'бізнесу',
    'відкриттів',
    'зберігання даних',
    'глобального громадянства',
    'інновацій',
    'накопичення',
    'неперервної інтеграції',
    'новаторства',
    'продуктів харчування'
  ]);

  var галузь = Phrase([
    'кімнатні й садові рослини',
    'кредити для малого та середнього бізнесу',
    'інформаційні технології',
    'мобільний голосовий зв\'язок',
    'підприємницька діяльність',
    'розробка програмного забезпечення',
    'свіжі овочі та фрукти',
    'телекомунікації',
  ]);

  var довершеним = Phrase([
    'довершеним',
    'інноваційним',
    'надійним',
    'прогресивним',
    'технологічним',
  ]);

  var киян = Phrase([
    'домашніх улюбленців',
    'гостей столиці',
    'киян',
    'стильних особистостей',
  ]);

  var замовниками = Phrase([
    'акціонерами',
    'гуртовими постачальниками',
    'замовниками',
    'іноземними компаніями',
    'клієнтами',
    'нашими партнерами',
    'рейтинговими агентствами',
  ]);

  var послугу = Phrase([
    'виготовлення ключів',
    'закупівлю-продаж',
    'кабельне телебачення',
    'пасажирські перевезення',
    'передачу даних',
    'послуги доставки кореспонденції',
    'ремонт ювелірних виробів і годинників',
    'юридичний захист ваших прав',
  ]);

  var професіоналізм = Phrase([
    function () { return r('відкритість', 'досвідченість', 'професіоналізм') + ' ' + r('виваженої', 'гармонійної', 'дружньої', 'злагодженої') + ' команди'; },
    function () { return r('збільшення', 'розширення') + ' ' + r('асортименту товарів', 'рівня капіталізації', 'технічної бази'); },
    function () { return r('модернізація', 'підтримка', 'оптимізація', 'розвиток') + ' ' + r('персоналу', 'сервісу', 'топ-менеджерів'); },
    function () { return r('динамічне впровадження', 'синергетичне поєднання') },
    function () { return r('розробка', 'створення') + ' ' + r('нових', 'оптимальних') + ' ' + r('підходів і технологій', 'товарних груп та відділів', 'торгових марок'); },
    function () { return r('робітнича', 'управлінська') + ' ' + r('вправність', 'майстерність') },
    function () { return сучасні() + ' ' + r('ціни', 'технології'); },
  ]);

  var сучасні = Phrase([
    'вигідні',
    'до найменших дрібниць прораховані',
    'захоплюючі',
    'комп\'ютерні',
    'оригінальні',
    'приємні',
    'сучасні',
    'фінансово відповідальні',
    'універсальні',
  ]);

  var товариства = Phrase([
    'компанії',
    'організації',
    'підприємства',
    'товариства',
  ]);

  var товариство = Phrase([
    'компанія',
    'організація',
    'підприємство',
    'товариство',
  ]);

  var товариству = Phrase([
    'компанії',
    'організації',
    'підприємству',
    'товариству',
  ]);

  // http://stackoverflow.com/a/6274398
  function shuffle(array) {
    var counter = array.length;

    while (counter > 0) {
      var index = Math.floor(Math.random() * counter);
      counter--;

      var temp = array[counter];
      array[counter] = array[index];
      array[index] = temp;
    }

    return array;
  }

  function Phrase(options) {
    var i = 0;
    options = shuffle(options.slice());

    return function () {
      var option = options[i];

      if (++i === options.length) {
        i = 0;

        while (options[0] === option) {
          shuffle(options);
        }
      }

      return (typeof option === 'function') ? option() : option;
    };
  }

  function r(xs) {
    if (arguments.length === 1) {
      return xs[Math.floor(Math.random() * xs.length)];
    } else {
      return arguments[Math.floor(Math.random() * arguments.length)];
    }
  }

  var fakerUk = {
    helpers: {
      Phrase: Phrase,
      randomize: r,
      shuffle: shuffle,
    },

    lorem: {
      sentence: sentence,
      sentences: sentences,
    },
  };

  if (typeof module !== 'undefined') {
    module.exports = fakerUk;
  }

  if (typeof window !== 'undefined') {
    window.fakerUk = fakerUk;
  }
})();
