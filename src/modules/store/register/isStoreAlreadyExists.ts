import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface} from "class-validator";
import { Store } from "../../../entity/Store";

@ValidatorConstraint({ async: true })
export class isStoreAlreadyExistsConstraint
implements ValidatorConstraintInterface {

    validate(shopName: string) {
        return Store.findOne({where:{shopName}}).then(store => {
            if (store) return false;
            return true;
        });
    }

}

export function isStoreAlreadyExists(validationOptions?: ValidationOptions) {
   return function (object: Object, propertyName: string) {
        registerDecorator({
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [],
            validator: isStoreAlreadyExistsConstraint
        });
   };
}
