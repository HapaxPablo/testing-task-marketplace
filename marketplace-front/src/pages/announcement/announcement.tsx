import { useParams } from "react-router";

export function Announcement() {

    const params = useParams();

    console.log('params', params);


    return <div>Announcement</div>;
}