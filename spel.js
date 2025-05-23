let tid;

function Starta()
{(function()
    {
        let tids = 0;
        tid = setInterval(()=>{
        tids ++;
        if(tids >= 3)
        {
            Spawn();
            tids = 0;
        }
    },1000)
    })()
    
}

function Spawn()
{
    
}
