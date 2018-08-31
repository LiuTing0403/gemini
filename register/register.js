$(function() {
  var gender;
  $('form').on('submit', function(e) {
    e.preventDefault()
    var inputs = $('input')
    var values = {gender: gender}
    for(i = 0; i < inputs.length; i ++) {
      var ipt = inputs[i]
      if (ipt.name !== 'gender') {
        values[ipt.name] = ipt.value
      }
    }
    values.id_type = $('select')[0].value
    window.fetch('http://111.231.91.206:8000/guests/lists/3/guests/', {
      method:'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, GET',
        'Access-Control-Allow-Headers': 'Content-Type'
      },
      body: JSON.stringify(values)
    })
    .then(res => res.json())
    .then(res => console.log(res))
  })
  $(':radio').on('click', function(e) {
    gender = e.target.value
  })
  $('select').on('change', function(e) {
    console.log(e.target.value)
  })
})