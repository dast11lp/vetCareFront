import { Input } from '../Input';
import { RootState, useAppDispatch } from '../../app/store';
import { SubmitHandler, useForm } from 'react-hook-form';
import { registerPetFormRules } from '../../helpers';
import { registerPetThunk } from '../../api/pet';
import { PetData } from '../../types/Pet.types';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { supabase } from '../../lib/supabase';


export const PetRegister = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm<PetData>({ mode: 'all' });
    const id = useSelector((state: RootState) => state.authReducer.userInfo?.id)
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const onSubmit: SubmitHandler<PetData> = async (data) => {

        // cargar imagen para supabase
        let imageUrl = null;
        if (data.image && data.image[0]) {
            const file = data.image[0];
            const fileName = `${Date.now()}-${file.name}`;

            const { error } = await supabase.storage
                .from('imagePets')
                .upload(fileName, file);

            if (error) {
                console.error("Error subidno imagen: ", error);
                return
            }

            const { data: urlData } = supabase.storage
                .from("imagePets")
                .getPublicUrl(fileName);

            imageUrl = urlData.publicUrl;
        }

        //
        const body: PetData = {
            ...data,
            image: imageUrl,
            owner: {
                id
            },
        }
        dispatch(registerPetThunk(body))

        navigate('/mascotas', { replace: true })

    };
    return (
        <div className='register'>
            {/* <div>{userInfo}</div> */}
            <form className='form' onSubmit={handleSubmit(onSubmit)}>
                <h2 className='form__title'>Registra tu Mascota</h2>
                <Input register={register} watch={watch} errors={errors} rules={registerPetFormRules.name} name={"name"} label={"Nombre"} type='text' icon={null} />
                <Input register={register} watch={watch} errors={errors} rules={registerPetFormRules.high} name={"high"} label={"Altura"} type='text' icon={null} />
                <Input register={register} watch={watch} errors={errors} rules={registerPetFormRules.weight} name={"weight"} label={"Peso"} type='text' icon={null} />
                <Input register={register} watch={watch} errors={errors} rules={registerPetFormRules.species} name={"species"} label={"Especie"} type='text' icon={null} />
                <Input register={register} watch={watch} errors={errors} rules={registerPetFormRules.breed} name={"breed"} label={"Raza"} type='text' icon={null} />
                <label className="btn-upload">
                    📷 Subir foto
                    <input
                        type="file"
                        accept="image/*"
                        {...register("image")}
                        style={{ display: 'none' }}
                    />
                </label>
                <input type='submit' className='btn btn--form' value="Registrarse" />
            </form>
        </div>

    )
}





