// Function to handle enabling/disabling input
function disableInput(input) {
    input.setAttribute('readonly', '');
    input.setAttribute('tabindex', '-1'); // Prevent tabbing
    input.classList.add('calculator__input--disabled');
    input.style.pointerEvents = 'none'; // Prevent focus on click
}

function enableInput(input) {
    input.removeAttribute('readonly');
    input.removeAttribute('tabindex');
    input.classList.remove('calculator__input--disabled');
    input.style.pointerEvents = 'auto';
}

document.addEventListener('DOMContentLoaded', () => {
    const scenarios = document.querySelectorAll('#scenario-1, #scenario-2, #scenario-3');

    scenarios.forEach((scenario, index) => {
        const calculationGroup = scenario.querySelector('.calculator-group');
        const inputs = Array.from(calculationGroup.querySelectorAll('input[type="number"]'));
        const [ampInput, voltInput, wattInput] = inputs;
        const calculateBtn = scenario.querySelector('.btn.btn--primary');
        const select = scenario.querySelector('select');

        // Configure inputs
        inputs.forEach(input => {
            input.setAttribute('min', '0');
            input.setAttribute('step', 'any');

            // Add enter key handler
            input.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    calculateBtn.click();
                }
            });
        });

        // Set initial disabled state
        const initialValue = select.value.toLowerCase();
        if (initialValue === 'amplitude') {
            disableInput(ampInput);
        } else if (initialValue === 'voltage') {
            disableInput(voltInput);
        } else if (initialValue === 'wattage') {
            disableInput(wattInput);
        }

        // Handle select change
        select.addEventListener('change', () => {
            inputs.forEach(input => enableInput(input));
            
            const selectedValue = select.value.toLowerCase();
            if (selectedValue === 'amplitude') {
                disableInput(ampInput);
            } else if (selectedValue === 'voltage') {
                disableInput(voltInput);
            } else if (selectedValue === 'wattage') {
                disableInput(wattInput);
            }
        });

        // Calculate button click handler
        calculateBtn.addEventListener('click', () => {
            const amp = ampInput.value ? parseFloat(ampInput.value) : null;
            const volt = voltInput.value ? parseFloat(voltInput.value) : null;
            const watt = wattInput.value ? parseFloat(wattInput.value) : null;
            
            const phase = index === 0 ? 1 : 3;
            const sqrt = Math.sqrt(phase);

            // Get the selected calculation type
            const selectedValue = select.value.toLowerCase();

            // Calculate based on selected type
            if (selectedValue === 'amplitude' && volt && watt) {
                const result = Math.round(watt / (volt * sqrt));
                ampInput.value = result;
            }
            else if (selectedValue === 'voltage' && amp && watt) {
                const result = Math.round(watt / (amp * sqrt));
                voltInput.value = result;
            }
            else if (selectedValue === 'wattage' && amp && volt) {
                const result = Math.round(amp * volt * sqrt);
                wattInput.value = result;
            }
        });
    });
});