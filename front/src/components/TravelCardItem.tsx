import { TravelType } from "../types/travel.type";
import Button from "./ui/Button";

type TravelCardItemProps = {
    travel: TravelType
}

const TravelCardItem = ({ travel } : TravelCardItemProps) => {
    return ( 
        <div className="shadow-md rounded-md">
          <img src={travel.image} alt="" className="w-full" />
          
          <div className="p-4">
            <h3 className="text-xl text-red-400">
                {travel.name}
            </h3>
            <p>{travel?.description?.substring(10)}...</p>
          </div>

          <Button 
            text="Show more"
            variant="primary"
          />

          {/* 
            Create handleDeleteTravel function
              delete element into array and update state
            add props onClick into Button component
           */}
          <Button 
            text="Delete"
            variant="danger"
          />
        </div>
     );
}
 
export default TravelCardItem;