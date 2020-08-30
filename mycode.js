function pascalTriangle()
{
    document.getElementById('pastriangle').innerHTML = ''; // очищаем переменную (треугольник), чтобы нарисовать новый
    var count = document.getElementById('input').value;
    if (count > 0)
    {
        var mas = createPascalTriangle(count); // создание массива массивов для треугольника
        var width_brick = mas[mas.length - 1][Math.floor(mas[mas.length - 1].length / 2)].toString().length; // ширина блоков
        for (var i = 0; i < mas.length; i++)
        {
            var div = document.createElement('div');
            div.style.width = (count * width_brick) + 'em';
            for (var j = 0; j < mas[i].length; j++)
            {
                var span = document.createElement('span');
                span.innerHTML= mas[i][j];
                span.className = "brick";
                span.style.width = width_brick + '3px';
                div.appendChild(span);
            }
            document.getElementById('pastriangle').appendChild(div);
        }
    }
    else
    {
        document.getElementById('pastriangle').innerHTML = '<big>Неправильный ввод!</big>';

    }
}


function createPascalTriangle(n)
{
    var mas = [];
    for (var i = 0; i < n; i++)
    {
        mas[i] = [];
        for (var j = 0; j <= i; j++)
        {
            if (j == i)
            {
                mas[i].push(1);
            }
            else
            {
                var elem;
                if (mas[i - 1][j - 1])
                {
                    if (mas[i - 1][j])
                    {
                        elem = mas[i - 1][j - 1] + mas[i - 1][j];
                    }
                    else
                    {
                        elem = mas[i - 1][j - 1];
                    }
                }
                else
                {
                    if (mas[i - 1][j])
                    {
                        elem = mas[i - 1][j];
                    }
                }
                mas[i].push(elem);
            }
        }
    }
    return mas;
}