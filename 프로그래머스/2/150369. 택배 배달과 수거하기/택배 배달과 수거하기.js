function solution(cap, n, deliveries, pickups) {
    let ans = 0, lastDeliverIdx = n-1, lastPickupIdx = n-1;
    
    while (deliveries[lastDeliverIdx] === 0 && lastDeliverIdx > -1) {
        deliveries.pop();
        lastDeliverIdx--;
    }
    
    while (pickups[lastPickupIdx] === 0 && lastPickupIdx > -1) {
        pickups.pop();
        lastPickupIdx--;
    }
    
    while (lastDeliverIdx > -1 || lastPickupIdx > -1) {
        let deliver = cap, pickup = cap;
        
        ans += Math.max(lastDeliverIdx+1, lastPickupIdx+1)*2;
        
        while (deliver > 0 && lastDeliverIdx > -1) {
            const cnt = Math.min(deliver, deliveries[lastDeliverIdx]);
            deliveries[lastDeliverIdx] -= cnt;
            deliver -= cnt;
            
            while (deliveries[lastDeliverIdx] === 0 && lastDeliverIdx > -1) {
                lastDeliverIdx--;
            }
        }
        
        while (pickup > 0 && lastPickupIdx > -1) {
            const cnt = Math.min(pickup, pickups[lastPickupIdx]);
            pickups[lastPickupIdx] -= cnt;
            pickup -= cnt;
            
            while (pickups[lastPickupIdx] === 0 && lastPickupIdx > -1) {
                lastPickupIdx--;
            }
        }
    }
    
    return ans;
}