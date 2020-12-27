import { parse } from 'fast-xml-parser';
import { XmlEntities, AllHtmlEntities } from 'html-entities';

export default class XmlHelper {
  private static xmlEntities = new XmlEntities();

  private static htmlEntities = new AllHtmlEntities();

  /**
   * Decode an encoded xml string
   *
   * @static
   * @param {string} text Encoded XML
   * @returns {string} Decoded XML
   * @memberof XmlHelper
   */
  static DecodeXml(text: unknown): string | undefined {
    if (typeof text !== 'string' || text === '') {
      return undefined;
    }
    return XmlHelper.xmlEntities.decode(text);
  }

  /**
   * Decode an encoded html string
   *
   * @static
   * @param {string} text Encoded html
   * @returns {string|undefined} Decoded html
   * @memberof XmlHelper
   */
  static DecodeHtml(text: unknown): string | undefined {
    if (typeof text !== 'string' || text === '') {
      return undefined;
    }
    return XmlHelper.htmlEntities.decode(text);
  }

  /**
   * DecodeAndParseXml will decode the encoded xml string and then try to parse it
   *
   * @static
   * @param {string} encodedXml Encoded Xml string
   * @returns {*} a parsed Object of the XML string
   * @memberof XmlHelper
   */
  static DecodeAndParseXml(encodedXml: unknown, attributeNamePrefix = '_'): any {
    const decoded = XmlHelper.DecodeXml(encodedXml);
    if (typeof decoded === 'undefined') return undefined;
    return parse(decoded, { ignoreAttributes: false, attributeNamePrefix });
  }

  /**
   * DecodeAndParseXml will decode the encoded xml string and then try to parse it
   *
   * @static
   * @param {string} encodedXml Encoded Xml string
   * @returns {*} a parsed Object of the XML string
   * @memberof XmlHelper
   */
  static DecodeAndParseXmlNoNS(encodedXml: unknown, attributeNamePrefix = '_'): any {
    const decoded = XmlHelper.DecodeXml(encodedXml);
    return decoded ? parse(decoded, { ignoreAttributes: false, ignoreNameSpace: true, attributeNamePrefix }) : undefined;
  }

  /**
   * EncodeXml will encode a xml string so it is safe to send to sonos.
   *
   * @static
   * @param {string} xml
   * @returns {string}
   * @memberof XmlHelper
   */
  static EncodeXml(xml: unknown): string {
    if (typeof xml !== 'string' || xml === '') return '';
    return XmlHelper.xmlEntities.encode(xml);
  }

  static EncodeXmlUndefined(xml: unknown): string | undefined {
    if (typeof xml === 'undefined') {
      return undefined;
    }
    if (typeof xml === 'string') {
      return xml === '' ? undefined : XmlHelper.xmlEntities.encode(xml);
    }

    return XmlHelper.EncodeXml(`${xml}`);
  }

  static EncodeTrackUri(trackUri: string): string {
    if (trackUri.startsWith('http')) return encodeURI(trackUri);
    if (
      trackUri.startsWith('x-sonos-hta')
      || trackUri.startsWith('x-rincon-mp3radio')
    ) return trackUri;

    // Part below needs some work.
    const index = trackUri.indexOf(':') + 1;
    return trackUri.substr(0, index) + this.EncodeXml(trackUri.substr(index)).replace(/:/g, '%3a');
  }

  static DecodeTrackUri(input: unknown): string | undefined {
    if (typeof input !== 'string' || input === '') {
      return undefined;
    }
    return XmlHelper.DecodeXml(decodeURIComponent(input));
  }
}
