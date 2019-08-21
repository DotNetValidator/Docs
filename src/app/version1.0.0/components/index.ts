/* Introduction */
import {GettingStartedComponent} from "./introduction/getting-started/getting-started.component";

/* Name-Space */
import {ValidatorClassComponent} from "./name-space/validator-class/validator-class.component";
import {ValidationErrorClassComponent} from "./name-space/validation-error-class/validation-error-class.component";
import {ValidationResultClassComponent} from "./name-space/validation-result-class/validation-result-class.component";

/* Validation */
import {BlackListFuncComponent} from "./validation/black-list-func/black-list-func.component";
import {ContainsFuncComponent} from "./validation/contains-func/contains-func.component";
import {CustomValidatorFuncComponent} from "./validation/custom-validator-func/custom-validator-func.component";
import {EndsWithFuncComponent} from "./validation/ends-with-func/ends-with-func.component";
import {IsAlphaFuncComponent} from "./validation/is-alpha-func/is-alpha-func.component";

/* Introduction */
export * from "./introduction/getting-started/getting-started.component";

/* Name-Space */
export * from "./name-space/validator-class/validator-class.component";
export * from "./name-space/validation-error-class/validation-error-class.component";
export * from "./name-space/validation-result-class/validation-result-class.component";

/* Validation */
export * from "./validation/black-list-func/black-list-func.component";
export * from "./validation/contains-func/contains-func.component";
export * from "./validation/custom-validator-func/custom-validator-func.component";
export * from "./validation/ends-with-func/ends-with-func.component";
export * from "./validation/is-alpha-func/is-alpha-func.component";

export const COMPONENTS: any[] = [
    GettingStartedComponent,

    ValidatorClassComponent,
    ValidationErrorClassComponent,
    ValidationResultClassComponent,

    BlackListFuncComponent,
    ContainsFuncComponent,
    CustomValidatorFuncComponent,
    EndsWithFuncComponent,
    IsAlphaFuncComponent
];
