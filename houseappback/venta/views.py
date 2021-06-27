from rest_framework.views import APIView, Response
from venta.models import Casa
from venta.services import get_info_casa
from venta.serializers import CasaSerializer

class CasasView(APIView):

    def get(self, request):
        try:
            data = Casa.objects.all()
            serializer = CasaSerializer(data, many=True)
            data = serializer.data
        except Exception as info_error:
            return Response(info_error.args, status=400)
        return Response(data, status=200)