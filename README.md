1. The objective of this example is to create a Singleton Dialog Instance using a Context & Provider so that we do not need to handle the state (open/close) manually everytime when we want to use a dialog.
2. Prevent parent or silbings components from re-rendering unnecessarily when the dialog state is toggled.
3. Has a built-in Confirmation dialog that only requires 3 params (Title, Content, onOK)
4. Support CustomDialog when you need to show more buttons or dynamic contents inside the dialog.
5. Do not support nested dialog as my project does not need it e.g. (A button inside a dialog that open another dialog...) 
