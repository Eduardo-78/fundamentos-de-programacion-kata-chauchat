let cargador = [];
for (let bala = 0; bala &lt; 7; bala++)
{
    cargador.push(&quot;pium!&quot;);
}
console.log (cargador);

function chauchat(carga) 
{
    let pausa = 0;
    for (let disparo = 0; disparo &lt; 7; disparo)
    {
        if (pausa == 3 || pausa == 6) 
        {
            console.log(&quot; &quot;);
            pausa++;
            continue;
        } else 
        {
            if (Math.random() &lt; 0.2) 
            {
                console.log(carga[disparo]);
                pausa++
                disparo++;
            } else 
            {
                console.log(&quot;Illo, me he quedao pillá!&quot;);
                pausa++;
                disparo++;
            }
        }
    }
}

chauchat(cargador);