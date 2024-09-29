import Home from '../Components/Home'
import {connect} from 'react-redux'
import {addToCart} from '../Services/Actions/Action'



const  mapStateToProps= state=>({

})
const mapDispatchToProps=dispatch=>({
    addToCartHandel:data=> dispatch(addToCart(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(Home)



// export default Home;