import { useParams } from "react-router";

export function Post() {

    const { id } = useParams();

    return <div data-testid='PostMock'>
        <h2>Post for component {id}</h2>
    </div>
}