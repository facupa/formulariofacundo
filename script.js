                document.getElementById('fecha_nacimiento').addEventListener('blur', function() {
                    const fechaInput = this;
                    const fechaValor = fechaInput.value;
                    const errorDiv = document.getElementById('error-fecha');

                    if (fechaValor) {
                        const anio = new Date(fechaValor).getFullYear();
                        if (anio > 2025) {
                            errorDiv.textContent = 'La fecha de nacimiento no puede ser superior al año 2025.';
                            fechaInput.focus();
                        } else {
                            errorDiv.textContent = '';
                        }
                    }
                });
