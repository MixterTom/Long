import { useContext } from "react";
import Body1 from "./Part1/Body1";
import Body2 from "./Part2/Body2";
import Body3 from "./Part3/Body3";
import {BodyContext} from '../../../utils/BodyContext'


export default function BodyFull() {
    const bodyType = useContext(BodyContext);
    function checkBody(){
        if(bodyType.typeBody == "body1"){
            return(<Body1></Body1>)
        }else if(bodyType.typeBody == "body2"){
            return(<Body2></Body2>)
        }else if(bodyType.typeBody == "body3"){
            return(<Body3></Body3>)
        }else{
            return(<></>)
        }
    }

    return(
        <>
            {
                checkBody()
            }
        </>
    )
}