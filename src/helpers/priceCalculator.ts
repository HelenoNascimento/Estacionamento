export const calculatePricePerHour = (entry: Date, exit: Date) =>{
    const exitWithExtraTime = new Date(exit.getTime());
    exitWithExtraTime.setMinutes(exitWithExtraTime.getMinutes() + 40);

    const millisecondsPerHour = 1000 * 60 * 60;
    const priceHour = 12;
    const thirtyMinutes = 5;

    let price = 0;
    console.log("preco por hora: " + priceHour)

    const diffInMs = Math.abs(exitWithExtraTime.getTime() - entry.getTime()); // Obter a diferença em milissegundos
    const diffInHours = Math.floor(diffInMs / millisecondsPerHour); // Obter as horas
    const diffInMinutes = Math.floor((diffInMs % millisecondsPerHour) / (1000 * 60)); // Obter os minutos
    
    console.log("Tempo de permanencia "+diffInHours + " horas e " + diffInMinutes + " minutos");

    const valueToPay = priceHour * diffInHours; // Calcular o valor a ser pago

    if(diffInMinutes <= 30){
        price = thirtyMinutes;
    } else if (diffInMinutes > 30 && diffInMinutes < 60) {
        price = priceHour / 2; // Cobrar metade do valor da hora
    } else if (diffInMinutes >= 60) {
        const remainingMinutes = diffInMinutes % 60; // Obter os minutos restantes
        const remainingValue = priceHour / 60 * remainingMinutes; // Calcular o valor dos minutos restantes
        price = priceHour * (diffInHours + 1) - remainingValue; // Adicionar o valor dos minutos restantes ao valor calculado anteriormente
    }

    const totalValueToPay = valueToPay + price;

    console.log("Valor a pagar: " + totalValueToPay)
    return totalValueToPay;
}
