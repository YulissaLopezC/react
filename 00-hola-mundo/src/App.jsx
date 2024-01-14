import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
    return (
        <section className='App'>
        <TwitterFollowCard isFollowing userName="YulissaLopezC" name="Yulissa Lopez Cortes"  />
        <TwitterFollowCard isFollowing={false} userName="YulissaLopezC" name="Yulissa Lopez Cortes"  />
        <TwitterFollowCard isFollowing userName="YulissaLopezC" name="Yulissa Lopez Cortes"  />
        </section>
    )
}