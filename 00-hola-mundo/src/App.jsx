import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
    return (
        <section className='App'>
        <TwitterFollowCard isFollowing userName="YulissaLopezC" name="Yulissa Lopez C"  />
        <TwitterFollowCard isFollowing={false} userName="YulissaLopezC" name="Yulissa Lopez C"  />
        <TwitterFollowCard isFollowing userName="YulissaLopezC" name="Yulissa Lopez C"  />
        </section>
    )
}