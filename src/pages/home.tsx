import BaseLayout from '../Components/Layouts/BaseLayout'
import MovieListing from '../Components/Movie/MovieListing'


function home() {
  return (
    <BaseLayout>
      <MovieListing />
    </BaseLayout>
  )
}

export default home