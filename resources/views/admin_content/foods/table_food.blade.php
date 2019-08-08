<div>
    <table class="table table-striped data-table">
        <thead>
            <tr>
                <th>Posición</th>
                <!-- <th>Foto</th> -->
                <th>Nombre del alimento</th>
                <th>Categoría</th>
                <th class="no-sort text-right">Acciones</th>
            </tr>
        </thead>
        <tbody class="tbody-sortable" data-textarea="idTextareaPositions">
            @foreach($entities as $entity)
            <tr data-id="{{$entity->id}}">
                <td><span class="num-sort">{{$loop->iteration}}</span></td>
                <!-- <td>
                    <img width="200" src="{{ asset('images/foods').'/'.$entity->photo }}" >
                </td> -->
                <td>{{$entity->name}}</td>
                <td>{{$entity->category}}</td>
                <td class="text-right">
                    <a href="/admin/alimentos/editar/{{$entity->id}}" class="btn btn-warning">
                        <i class="fa fa-cog" aria-hidden="true"></i>
                    </a>
                    <a href="#" id="deleteButton" data-id="{{$entity->id}}" data-name="{{$entity->name}}" class="btn btn-danger btn-delete" data-toggle="modal" data-target="#modalDelete">
                        <i class="fa fa-trash" aria-hidden="true"></i>
                    </a>
                </td>
            </tr>
            @endforeach
        </tbody>
    </table>
    <form id="formPositionsCourses" action="{{route('update_positions_foods')}}" method="POST" class="form-loading">
        <textarea name="positions" class="textarea-positions hide" id="idTextareaPositions"></textarea>
        {{ method_field('PUT') }}
        {{ csrf_field() }}
        <br>
        <button class="btn btn-primary hide submit-form btn-update-positions"><i class="fa fa-list-ol"></i> Actualizar Posiciones</button>
    </form>
</div>