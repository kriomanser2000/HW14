var selectElement = document.getElementById('type');
var selectedValue = selectElement.value;
selectElement.addEventListener('change', function() 
{
    var selectedValue = selectElement.value;
    console.log('Обрано: ' + selectedValue);
});
function saveColor() 
{
    var color = document.querySelector('.inputbox1 input').value;
    var type = document.getElementById('type').value;
    var codeInput = document.querySelector('.inputbox2 input').value;
    if (!isValidColor(color)) 
    {
        alert('Введено неправильний колір.');
        return;
    }
    if (codeInput.trim() === '') 
    {
        alert('Введіть код кольору.');
        return;
    }
    var colorBlock = document.createElement('div');
    colorBlock.classList.add('color-block');
    colorBlock.style.backgroundColor = color;
    colorBlock.textContent = type.toUpperCase() + ': ' + codeInput;
    document.querySelector('section').appendChild(colorBlock);
    var colors = JSON.parse(getCookie('colors') || '[]');
    colors.push({ color: color, type: type, code: codeInput });
    document.cookie = 'colors=' + JSON.stringify(colors) + '; expires=' + new Date(Date.now() + 3 * 60 * 60 * 1000).toUTCString();
}
function isValidColor(color) 
{
    var s = new Option().style;
    s.color = color;
    return s.color === color;
}
function getCookie(name) 
{
    var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    if (match) return match[2];
}
document.getElementById('saveButton').addEventListener('click', saveColor);
{
    var colorValue = document.querySelector('.inputbox1 input').value;
    var colorType = document.getElementById('type').value;
    var colorCode = document.querySelector('.inputbox2 input').value;
    if (colorValue.trim() === '' || colorCode.trim() === '') 
    {
        alert('Будь ласка, заповніть всі поля.');
        return;
    }
    var colorData = 
    {
        value: colorValue,
        type: colorType,
        code: colorCode
    };
    document.cookie = 'color=' + JSON.stringify(colorData) + '; max-age=' + (3 * 60 * 60);
    alert('Колір збережено успішно.');
};
window.onload = function() 
{
    var colors = JSON.parse(getCookie('colors') || '[]');
    for (var i = 0; i < colors.length; i++) 
    {
        var colorBlock = document.createElement('div');
        colorBlock.classList.add('color-block');
        colorBlock.style.backgroundColor = colors[i].color;
        colorBlock.textContent = colors[i].type.toUpperCase() + ': ' + colors[i].code;
        document.querySelector('section').appendChild(colorBlock);
    }
}

