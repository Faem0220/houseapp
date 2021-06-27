from venta.models import Casa

def get_info_casa(id):
    nombre = Casa.objects.values_list('nombre').filter(id=id)
    for n in nombre:
        nom = str(n[0])
    ubicacion = Casa.objects.values_list('ubicacion').filter(id=id)
    for n in ubicacion:
        ubi = str(n[0])

    data = {
        'nombre':nom,
        'ubicacion': ubi,
    }
    return data