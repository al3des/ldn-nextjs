export default function AnimatedBackgroundElements({itemsCount = 10}){
    const items = new Array(itemsCount).fill(null)
    return items.map((item,i)=>(<span key={i}></span>))
}