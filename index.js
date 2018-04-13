const formatDate = (timeInSeconds) => {
	const hours = Math.floor(timeInSeconds / 3600);
    const minuts = Math.floor((timeInSeconds % 3600) / 60);
    const second = Math.floor((timeInSeconds % 3600) % 60);

    if (typeof timeInSeconds !== "undefined") {
        if (timeInSeconds === 0) {
            return `0s`;
        }
        
        if (hours === 0 && second === 0) {
            return `${minuts}m`;
        }
    
        if (hours === 0 && minuts === 0) {
            return  `${second}s`;
        }
    
        if ( minuts === 0 && second === 0 ) {
            return `${hours}h`;
        } else if (minuts === 0) {
            return `${hours}h ${second}s`;
        }
    
        if (hours === 0) {
            return `${minuts}m ${second}s`;
        }
        
        if (second === 0) {
            return `${hours}h ${minuts}m`;
        }
    
        if (timeInSeconds !== 0) {
            return `${hours}h ${minuts}m ${second}s`;
        }
    } else {
        return `0s`;
    }
}

module.exports = formatDate;