import AuthorFilter from './AuthorFilter'
import FavoriteFilter from './FavoriteFilter'
import StatusFilter from './StatusFilter'

export default function Filters() {
  return (
    <section className='mt-8'>
      <AuthorFilter />
      <FavoriteFilter />
      <StatusFilter />
    </section>
  )
}
