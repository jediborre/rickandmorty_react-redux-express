import React from 'react';

export interface PersonajeDetalleInterface {
	id: string;
	name: string;
	species: string;
	status: string;
	location: string;
	image: string;
	onClose: (show: boolean) => void;
}

const PersonajeDetalle : React.FC<PersonajeDetalleInterface> = ({id, name, species, status, location, image, onClose}) => {
	return (
		<>
			<div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
			  	<div className="relative w-auto my-6 mx-auto max-w-3xl">
					<div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
						<div className="flex items-start justify-center p-5 border-b border-solid border-slate-200 rounded-t">
							<h3 className="text-3xl text-center font-semibold text-blue-900">
								{name}
							</h3>
							<button
								className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
								onClick={() => onClose(false)}
							>
								<span className="bg-transparent text-black opacity-7 h-6 w-6 text-2xl block outline-none focus:outline-none">
									×
								</span>
							</button>
						</div>
						<div className="relative p-6 flex-auto">
							<div className="mx-auto">
								<img src={image} alt={name} />
								<div className="my-4 text-slate-500 text-lg leading-relaxed">
									<div>
										Especie: <span className='text-blue-900 font-bold'>{species}</span>
									</div>
									<div>
										Status: <span className='text-blue-900 font-bold'>{status}</span>
									</div>
									<div>
										Location: <span className='text-blue-900 font-bold'>{location}</span>
									</div>
								</div>
							</div>
						</div>
						<div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
							<button
								className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
								type="button"
								onClick={() => onClose(false)}
							>
								Cerrar
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className="opacity-25 fixed inset-0 z-40 bg-black" onClick={() => onClose(false)}>
			</div>
		</>
	);
};

export default PersonajeDetalle;