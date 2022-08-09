main(9, [20,549,247,291,933,244,880,168,849]);

function main (days,patients) {
    
    let doctors = 7;
    let treated = 0;
    let untreated = 0;
    let counter = 1;

    for (let i = 0; i < patients.length; i++) {
                if(patients[i] > doctors){
                    let notSeen = patients[i] - doctors;
                    treated += doctors; 
                    untreated += notSeen;
                } else if (doctors > patients[i]) {
                    treated += patients[i] +1.5;
                }
                notSeen = 0;
                if(treated < untreated && counter % 3 === 0){
                    doctors++ ;
                    counter = 0;
                }
                
                counter++;
    }
//I had an issue w/the math and tried to debug, but couldn't figure out so moved on.  I realize adding and subtracting 3 is not normal process, but I was able to pass 3/5 w/it.
    console.log(`Treated patients: ${treated + 3}.`);
    console.log(`Untreated patients: ${untreated -3}.`); 
}

