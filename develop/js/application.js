(function() {
  var setZodiacLogo;

  $(function() {
    $('.custom-select').customSelect();
    return setZodiacLogo();
  });

  $('#zodiac_day, #zodiac_month').change(function() {
    return setZodiacLogo();
  });

  setZodiacLogo = function() {
    var dayNum, monthNum, yearNum, zodiacDate, zodiacName;
    zodiacName = 'default';
    dayNum = $('#zodiac_day').val();
    monthNum = $('#zodiac_month').val();
    yearNum = $('#zodiac_year').val();
    zodiacDate = new Date(monthNum + '/' + dayNum + '/' + yearNum);
    console.log(yearNum);
    if (zodiacDate >= new Date('03/21/' + yearNum) && zodiacDate <= new Date('04/20/' + yearNum)) {
      zodiacName = 'aries';
    }
    if (zodiacDate >= new Date('04/21/' + yearNum) && zodiacDate <= new Date('05/21/' + yearNum)) {
      zodiacName = 'taurus';
    }
    if (zodiacDate >= new Date('05/22/' + yearNum) && zodiacDate <= new Date('06/21/' + yearNum)) {
      zodiacName = 'gemini';
    }
    if (zodiacDate >= new Date('06/22/' + yearNum) && zodiacDate <= new Date('07/22/' + yearNum)) {
      zodiacName = 'cancer';
    }
    if (zodiacDate >= new Date('07/23/' + yearNum) && zodiacDate <= new Date('08/23/' + yearNum)) {
      zodiacName = 'leo';
    }
    if (zodiacDate >= new Date('08/24/' + yearNum) && zodiacDate <= new Date('09/23/' + yearNum)) {
      zodiacName = 'virgo';
    }
    if (zodiacDate >= new Date('09/24/' + yearNum) && zodiacDate <= new Date('10/23/' + yearNum)) {
      zodiacName = 'libra';
    }
    if (zodiacDate >= new Date('10/24/' + yearNum) && zodiacDate <= new Date('11/22/' + yearNum)) {
      zodiacName = 'scorpius';
    }
    if (zodiacDate >= new Date('11/23/' + yearNum) && zodiacDate <= new Date('12/21/' + yearNum)) {
      zodiacName = 'sagittarius';
    }
    if (zodiacDate >= new Date('12/22/' + yearNum) || zodiacDate <= new Date('01/20/' + yearNum)) {
      zodiacName = 'capricornus';
    }
    if (zodiacDate >= new Date('01/21/' + yearNum) && zodiacDate <= new Date('02/18/' + yearNum)) {
      zodiacName = 'aquarius';
    }
    if (zodiacDate >= new Date('02/19/' + yearNum) && zodiacDate <= new Date('03/20/' + yearNum)) {
      zodiacName = 'pisces';
    }
    $('.logo').empty();
    return $('.logo').append('<div class="sign sign-' + zodiacName + '"></div>');
  };

}).call(this);
