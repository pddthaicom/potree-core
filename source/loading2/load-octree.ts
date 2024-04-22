import {OctreeLoader} from './OctreeLoader';
import {GetUrlFn, XhrRequest} from '../loading/types';

export async function loadOctree(
	url: string,
	getUrl: GetUrlFn,
	xhrRequest: XhrRequest,
) 
{
	const trueUrl = await getUrl(url);
	const loader = new OctreeLoader();
	if (trueUrl.length == 4) {
		const {geometry} = await loader.loads(
			trueUrl[0], 
			trueUrl[1], 
			trueUrl[2], 
			trueUrl[3], 
			xhrRequest
		);
		return geometry;
	}
	else {
		const {geometry} = await loader.load(trueUrl[0], xhrRequest);
		return geometry;
	}
}
