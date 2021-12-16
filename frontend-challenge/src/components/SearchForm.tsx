import { FC, useState, FormEvent } from "react";
import {InputGroup, Input, Button} from "reactstrap"

import { Search } from "../interfaces";

const SearchForm: FC<Search> = ({searchText}) => {
    const [text, setText] = useState<any>('')

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        searchText(text)
    }

    return (
        <form onSubmit={handleSubmit}>
            <InputGroup>
                <Input placeholder="e.g. football"
                    onChange={(e) => setText(e.target.value)}/>
                <Button type="submit" color="success">
                    Seacrh!
                </Button>
            </InputGroup>
        </form>
    )
}

export default SearchForm