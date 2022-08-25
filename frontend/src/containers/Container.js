import React from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import FormInput from "../components/FormInput/FormInput";
import { clearInput, createPost, onChangeHandler } from "../store/services/shortSlice";
import Spinner from "../components/UI/Spinner/Spinner";
import ShortInfo from "../components/shortInfo/shortInfo";

const Container = () => {
    const { valueUrl, isLoading, shortUrl } = useSelector(state => state, shallowEqual);

    const dispatch = useDispatch();

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(createPost(valueUrl));
        dispatch(clearInput());
    }

    const changeHandler = (e) => {
        dispatch(onChangeHandler(e.target.value));
    }

    return (
        isLoading ? <Spinner /> :
            <>
                <FormInput
                    onChangeHandler={changeHandler}
                    onSubmit={onSubmit}
                    value={valueUrl}
                />
                <ShortInfo shortUrl={shortUrl} />
            </>
    )
}

export default Container;