import {fetchQuote} from "../actions/quoteAction.js";
import {deposit, withdraw} from "../actions/accountActions.js";
import {useDispatch} from "react-redux";
import {useState} from "react";


const Operation = () => {
    const [sum, setSum] = useState(0);
    const dispatch = useDispatch();


    return (
        <>
            <div className={'flex justify-center'}>
                <button className={'bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg rounded-lg py-2 px-4'}
                        onClick={() => dispatch(withdraw(sum))}>Withdraw
                </button>
                <input className={'text-center border rounded-lg py-2 px-4 text-white text-lg font-bold'}
                       type="number"
                       onChange={e => setSum(+e.target.value)}
                       value={sum}
                />
                <button className={'bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg rounded-lg py-2 px-4'}
                        onClick={() => dispatch(deposit(sum))}>Deposit
                </button>
            </div>
            <div className={'flex justify-center'}>
                <button onClick={() => dispatch(fetchQuote())}
                    className={"bg-blue-400 hover:bg-blue-500 cursor-pointer text-white font-bold text-lg rounded-lg px-9 mt-3 py-2"}>Get Quote</button>
            </div>
        </>
    );
};

export default Operation;