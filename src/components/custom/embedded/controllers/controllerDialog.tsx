import * as React from "react";

import {
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle
} from "@/components/ui/dialog";
import {
    Label
} from "@/components/ui/label";
import {
    Input
} from "@/components/ui/input";
import {
    Button
} from "@/components/ui/button";

import {
    ControllerDialogKind,
    ControllerDialogSubmitResult,
    type ControllerDialogCallback,
} from "./controllerDialog.types"
import {
    type ControllerProperties
} from "./controllerProperties";

/**
 * Method for creating the button footer of the dialog
 *
 * @author Danilo Bleul
 * @since 1.0
 *
 * @param kind The kind of the current dialog
 * @see ControllerDialogKind
 * @param onButtonClick The callback function if one button was pressed
 * @see ControllerDialogSubmitResult
 *
 * @constructor
 */
function ControllerDialogButtons(
    {kind, onButtonClick}: {
        kind: ControllerDialogKind,
        onButtonClick: (result: ControllerDialogSubmitResult) => void,
}) {

    // Saving result according to the dialog kind
    const result = () => {
        switch (kind) {
            case ControllerDialogKind.MODIFY: {
                return (
                    <DialogFooter className="grid grid-cols-2 items-center gap-4">

                        {/*Button SAVE -> Submitting the changes*/}
                        <DialogClose asChild>
                            <Button onClick={() => {
                                onButtonClick(ControllerDialogSubmitResult.SUBMIT)
                            }}>Save changes</Button>
                        </DialogClose>

                        {/*Button DELETE -> Removing the entity*/}
                        <DialogClose asChild>
                            <Button variant="destructive" onClick={() => {
                                onButtonClick(ControllerDialogSubmitResult.DELETE)
                            }}>Delete controller</Button>
                        </DialogClose>

                    </DialogFooter>
                )
            }
            case ControllerDialogKind.CREATE: {
                return (
                    <DialogFooter className="grid grid-cols-1 items-center gap-4">

                        {/*Button CREATE -> Creating the entity*/}
                        <DialogClose asChild>
                            <Button onClick={() => {

                                onButtonClick(ControllerDialogSubmitResult.SUBMIT)

                            }}>Create controller</Button>
                        </DialogClose>

                    </DialogFooter>
                )
            }
        }
    }

    // Return the generated result
    return result()
}

/**
 * Method for creating a dialog for managing a controller
 *
 * @author Danilo Bleul
 * @since 1.0
 *
 * @param kind The kind of the dialog to create
 * @see ControllerDialogKind
 * @param controller The properties of the corresponding controller
 * @see ControllerProperties
 * @param onDialogSubmit The callback function if a dialog was closed
 * @see ControllerDialogCallback
 * @param props Other properties for REACT
 *
 * @constructor
 */
export function ControllerDialog(
    {kind, controller, onDialogSubmit, ...props}: {
        kind: ControllerDialogKind,
        controller?: ControllerProperties,
        onDialogSubmit: ControllerDialogCallback,
    } & React.ComponentProps<typeof DialogContent>,
) {

    // Saving the dialog caption
    const caption = `Settings of ${ (kind == ControllerDialogKind.CREATE) 
        ? "a new controller"
        : controller!.id
    }`


    // Copying of the property attribute (NOT USING THE REFERENCE DIRECTLY)
    const copied: ControllerProperties =
        (kind == ControllerDialogKind.MODIFY)
            ? {...controller!}
            : {
                id: "",
                interval: 5,
            }


    // Lambda for determining the property output at a special modal result
    const getProperties = (number: ControllerDialogSubmitResult) => {
        switch (number) {
            case ControllerDialogSubmitResult.SUBMIT : {return copied}
            default: return undefined
        }
    }

    return(
        <DialogContent {...props}>

            {/* Header with caption */}
            <DialogHeader>
                <DialogTitle>{caption}</DialogTitle>
                <DialogDescription>
                    Edit the preferences of a controller.
                </DialogDescription>
            </DialogHeader>

            {/* Editing fields for the property values */}
            <div className="grid gap-4 py-4">

                {/* Setting Name */}
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="id" className="text-right">
                        ID
                    </Label>
                    <Input
                        id="id"
                        type="text"
                        value={copied.id}
                        onChange={(e) => copied.id = e.target.value.trim()}
                        className="col-span-3"
                    />
                </div>

                {/* Setting Interval */}
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="interval" className="text-right">
                        Interval
                    </Label>
                    <Input
                        id="interval"
                        type="number"
                        min={0}
                        value={copied.interval}
                        onChange={(e) => copied.interval = parseInt(e.target.value)}
                        className="col-span-3"
                    />
                </div>

            </div>

            {/* Button footer (with callback) */}
            <ControllerDialogButtons kind={kind} onButtonClick={(result) => {
                onDialogSubmit(result,getProperties(result))
            }}/>

        </DialogContent>

    )
}