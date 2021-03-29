// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: desmos/profiles/v1beta1/genesis.proto

package types

import (
	fmt "fmt"
	_ "github.com/gogo/protobuf/gogoproto"
	proto "github.com/gogo/protobuf/proto"
	io "io"
	math "math"
	math_bits "math/bits"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.GoGoProtoPackageIsVersion3 // please upgrade the proto package

// GenesisState defines the profiles module's genesis state.
type GenesisState struct {
	Profiles             []Profile             `protobuf:"bytes,1,rep,name=profiles,proto3" json:"profiles" yaml:"profiles"`
	DtagTransferRequests []DTagTransferRequest `protobuf:"bytes,2,rep,name=dtag_transfer_requests,json=dtagTransferRequests,proto3" json:"dtag_transfer_requests" yaml:"dtag_transfer_requests"`
	Params               Params                `protobuf:"bytes,3,opt,name=params,proto3" json:"params" yaml:"params"`
}

func (m *GenesisState) Reset()         { *m = GenesisState{} }
func (m *GenesisState) String() string { return proto.CompactTextString(m) }
func (*GenesisState) ProtoMessage()    {}
func (*GenesisState) Descriptor() ([]byte, []int) {
	return fileDescriptor_24f308c1ccf2d582, []int{0}
}
func (m *GenesisState) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *GenesisState) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_GenesisState.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *GenesisState) XXX_Merge(src proto.Message) {
	xxx_messageInfo_GenesisState.Merge(m, src)
}
func (m *GenesisState) XXX_Size() int {
	return m.Size()
}
func (m *GenesisState) XXX_DiscardUnknown() {
	xxx_messageInfo_GenesisState.DiscardUnknown(m)
}

var xxx_messageInfo_GenesisState proto.InternalMessageInfo

func (m *GenesisState) GetProfiles() []Profile {
	if m != nil {
		return m.Profiles
	}
	return nil
}

func (m *GenesisState) GetDtagTransferRequests() []DTagTransferRequest {
	if m != nil {
		return m.DtagTransferRequests
	}
	return nil
}

func (m *GenesisState) GetParams() Params {
	if m != nil {
		return m.Params
	}
	return Params{}
}

func init() {
	proto.RegisterType((*GenesisState)(nil), "desmos.profiles.v1beta1.GenesisState")
}

func init() {
	proto.RegisterFile("desmos/profiles/v1beta1/genesis.proto", fileDescriptor_24f308c1ccf2d582)
}

var fileDescriptor_24f308c1ccf2d582 = []byte{
	// 321 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0x52, 0x4d, 0x49, 0x2d, 0xce,
	0xcd, 0x2f, 0xd6, 0x2f, 0x28, 0xca, 0x4f, 0xcb, 0xcc, 0x49, 0x2d, 0xd6, 0x2f, 0x33, 0x4c, 0x4a,
	0x2d, 0x49, 0x34, 0xd4, 0x4f, 0x4f, 0xcd, 0x4b, 0x2d, 0xce, 0x2c, 0xd6, 0x2b, 0x28, 0xca, 0x2f,
	0xc9, 0x17, 0x12, 0x87, 0x28, 0xd3, 0x83, 0x29, 0xd3, 0x83, 0x2a, 0x93, 0x12, 0x49, 0xcf, 0x4f,
	0xcf, 0x07, 0xab, 0xd1, 0x07, 0xb1, 0x20, 0xca, 0xa5, 0x54, 0x70, 0x99, 0x5a, 0x90, 0x58, 0x94,
	0x98, 0x5b, 0x4c, 0x48, 0x55, 0x6e, 0x7e, 0x4a, 0x6a, 0x0e, 0x54, 0x95, 0xd2, 0x41, 0x26, 0x2e,
	0x1e, 0x77, 0x88, 0x63, 0x82, 0x4b, 0x12, 0x4b, 0x52, 0x85, 0x42, 0xb9, 0x38, 0x60, 0x3a, 0x24,
	0x18, 0x15, 0x98, 0x35, 0xb8, 0x8d, 0x14, 0xf4, 0x70, 0x38, 0x4f, 0x2f, 0x00, 0x22, 0xe0, 0x24,
	0x7e, 0xe2, 0x9e, 0x3c, 0xc3, 0xa7, 0x7b, 0xf2, 0xfc, 0x95, 0x89, 0xb9, 0x39, 0x56, 0x4a, 0x30,
	0x75, 0x4a, 0x41, 0x70, 0xa3, 0x84, 0x3a, 0x19, 0xb9, 0xc4, 0x52, 0x4a, 0x12, 0xd3, 0xe3, 0x4b,
	0x8a, 0x12, 0xf3, 0x8a, 0xd3, 0x52, 0x8b, 0xe2, 0x8b, 0x52, 0x0b, 0x4b, 0x53, 0x8b, 0x4b, 0x8a,
	0x25, 0x98, 0xc0, 0xb6, 0xe8, 0xe0, 0xb4, 0xc5, 0x25, 0x24, 0x31, 0x3d, 0x04, 0xaa, 0x2b, 0x08,
	0xa2, 0xc9, 0x49, 0x15, 0x6a, 0xa3, 0x2c, 0xc4, 0x46, 0xec, 0x26, 0x2b, 0x05, 0x89, 0x80, 0x24,
	0xd0, 0xf4, 0x16, 0x0b, 0xf9, 0x71, 0xb1, 0x41, 0x42, 0x4a, 0x82, 0x59, 0x81, 0x51, 0x83, 0xdb,
	0x48, 0x1e, 0xb7, 0x07, 0xc1, 0xca, 0x9c, 0x44, 0xa1, 0xb6, 0xf1, 0x42, 0xfd, 0x07, 0x16, 0x55,
	0x0a, 0x82, 0x9a, 0xe2, 0xe4, 0x71, 0xe2, 0x91, 0x1c, 0xe3, 0x85, 0x47, 0x72, 0x8c, 0x0f, 0x1e,
	0xc9, 0x31, 0x4e, 0x78, 0x2c, 0xc7, 0x70, 0xe1, 0xb1, 0x1c, 0xc3, 0x8d, 0xc7, 0x72, 0x0c, 0x51,
	0x7a, 0xe9, 0x99, 0x25, 0x19, 0xa5, 0x49, 0x7a, 0xc9, 0xf9, 0xb9, 0xfa, 0x10, 0x3b, 0x74, 0x73,
	0x12, 0x93, 0x8a, 0xa1, 0x6c, 0xfd, 0x0a, 0x44, 0xe4, 0x94, 0x54, 0x16, 0xa4, 0x16, 0x27, 0xb1,
	0x81, 0x23, 0xc5, 0x18, 0x10, 0x00, 0x00, 0xff, 0xff, 0xfd, 0x83, 0x83, 0x32, 0x38, 0x02, 0x00,
	0x00,
}

func (m *GenesisState) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *GenesisState) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *GenesisState) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	{
		size, err := m.Params.MarshalToSizedBuffer(dAtA[:i])
		if err != nil {
			return 0, err
		}
		i -= size
		i = encodeVarintGenesis(dAtA, i, uint64(size))
	}
	i--
	dAtA[i] = 0x1a
	if len(m.DtagTransferRequests) > 0 {
		for iNdEx := len(m.DtagTransferRequests) - 1; iNdEx >= 0; iNdEx-- {
			{
				size, err := m.DtagTransferRequests[iNdEx].MarshalToSizedBuffer(dAtA[:i])
				if err != nil {
					return 0, err
				}
				i -= size
				i = encodeVarintGenesis(dAtA, i, uint64(size))
			}
			i--
			dAtA[i] = 0x12
		}
	}
	if len(m.Profiles) > 0 {
		for iNdEx := len(m.Profiles) - 1; iNdEx >= 0; iNdEx-- {
			{
				size, err := m.Profiles[iNdEx].MarshalToSizedBuffer(dAtA[:i])
				if err != nil {
					return 0, err
				}
				i -= size
				i = encodeVarintGenesis(dAtA, i, uint64(size))
			}
			i--
			dAtA[i] = 0xa
		}
	}
	return len(dAtA) - i, nil
}

func encodeVarintGenesis(dAtA []byte, offset int, v uint64) int {
	offset -= sovGenesis(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *GenesisState) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if len(m.Profiles) > 0 {
		for _, e := range m.Profiles {
			l = e.Size()
			n += 1 + l + sovGenesis(uint64(l))
		}
	}
	if len(m.DtagTransferRequests) > 0 {
		for _, e := range m.DtagTransferRequests {
			l = e.Size()
			n += 1 + l + sovGenesis(uint64(l))
		}
	}
	l = m.Params.Size()
	n += 1 + l + sovGenesis(uint64(l))
	return n
}

func sovGenesis(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozGenesis(x uint64) (n int) {
	return sovGenesis(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *GenesisState) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowGenesis
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: GenesisState: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: GenesisState: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Profiles", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowGenesis
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthGenesis
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthGenesis
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Profiles = append(m.Profiles, Profile{})
			if err := m.Profiles[len(m.Profiles)-1].Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field DtagTransferRequests", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowGenesis
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthGenesis
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthGenesis
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.DtagTransferRequests = append(m.DtagTransferRequests, DTagTransferRequest{})
			if err := m.DtagTransferRequests[len(m.DtagTransferRequests)-1].Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 3:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Params", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowGenesis
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthGenesis
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthGenesis
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if err := m.Params.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipGenesis(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthGenesis
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func skipGenesis(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowGenesis
			}
			if iNdEx >= l {
				return 0, io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= (uint64(b) & 0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		wireType := int(wire & 0x7)
		switch wireType {
		case 0:
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowGenesis
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				iNdEx++
				if dAtA[iNdEx-1] < 0x80 {
					break
				}
			}
		case 1:
			iNdEx += 8
		case 2:
			var length int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowGenesis
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				length |= (int(b) & 0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if length < 0 {
				return 0, ErrInvalidLengthGenesis
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupGenesis
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthGenesis
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthGenesis        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowGenesis          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupGenesis = fmt.Errorf("proto: unexpected end of group")
)
