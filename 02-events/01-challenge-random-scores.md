# Random scores

Create an event emitter than generates random match scores, and a listener
that displays the scores.

#### Sample array with soccer teams

    const teams = [
        'Real-Madrid', 
        'Chelsea', 
        'Barcelona', 
        'PSG', 
        'Bayern Munich', 
        'Liverpool',
        'Asenal',
        'Valencia'
    ];
    
#### Generate a random number lower than `n`

    function random(n) {
        return Math.round(Math.random() * n);
    }
        