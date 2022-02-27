export default function AnimatedBackgroundElements({itemsCount = 10}){
    const items = new Array(itemsCount).fill(<span></span>)
    return items.map(item=>(item))
}