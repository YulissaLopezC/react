import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
    const formatUserName = (userName) => `@${userName}`

    return (
        <section className='App'>

        <TwitterFollowCard formatUserName={formatUserName} userName="YulissaLopezC"> Yulissa Lopez Cortes </TwitterFollowCard>

        <TwitterFollowCard formatUserName={formatUserName} userName="YulissaLopezC"> Martin Andres Vega</TwitterFollowCard>
        
        </section>
    )
}