import { connect } from "react-redux";
import { getStock } from "../../actions/stock_actions";
import PurchaseForm from "./purchase_form";


const mapStateToProps = state => {
    return {
        user: state.session.user,
        stocks: state.entities.stocks ? state.entities.stocks : null,
        stockError: state.errors.stock
    };
};


const mapDispatchToProps = dispatch => {
    return {
        getStock: (stock) => dispatch(getStock(stock))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PurchaseForm);